import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:sensors_plus/sensors_plus.dart';
import 'routes.dart';

part './custom_images.dart';

class ImageGallery extends StatefulWidget {
  @override
  State<ImageGallery> createState() => _ImageGalleryState();
}

class _ImageGalleryState extends State<ImageGallery> {
  final List<String> _imagesUrls = [];
  bool _loading = false;

  final ImagePicker _picker = ImagePicker();
  AccelerometerEvent? _accelerometerEvent;

  @override
  void initState() {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

    accelerometerEvents.listen((event) {
      setState(() {
        _accelerometerEvent = event;
      });
    });

    _listImages();

    super.initState();
  }

  void _listImages() async {
    setState(() {
      _loading = true;
    });

    final ListResult result = await FirebaseStorage.instance
        .ref('uploads')
        .list();

    final List<String> urls = await Future.wait(
      result.items.map((element) async {
        return await element.getDownloadURL();
      }),
    );

    setState(() {
      _loading = false;
      _imagesUrls.addAll(urls);
    });
  }

  void _pickImage() async {
    try {
      final pickedFile = await _picker.pickImage(
        source: ImageSource.camera,
      );
      if (pickedFile != null) {
        var file = File(pickedFile.path);
        _uploadImage(file);
      }
    } catch (e) {
      print(e);
    }
  }

  void _uploadImage(File file) async {
    try {
      String fileName = file.path.split('/').last;

      var storageRef = FirebaseStorage.instance.ref(
        'uploads/$fileName',
      );
      storageRef.putFile(file);

      var url = await storageRef.getDownloadURL();
      setState(() {
        _loading = false;
        _imagesUrls.add(url);
      });
    } catch (e) {
      print(e);
    }
  }

  // void _addImage() {
  //   setState(() {
  //     images.add('assets/images/image4.jpg');
  //   });
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Image gallery"),
        actions: [
          IconButton(
            onPressed: _pickImage,
            icon: Icon(Icons.add_box, size: 36),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: Text(
                'Acelerometro: \n'
                'X: ${_accelerometerEvent?.x.toStringAsFixed(2) ?? '0.00'} \n'
                'Y: ${_accelerometerEvent?.y.toStringAsFixed(2) ?? '0.00'} \n'
                'Z: ${_accelerometerEvent?.z.toStringAsFixed(2) ?? '0.00'} \n',
              ),
            ),
            if (_loading)
              const CircularProgressIndicator()
            else
              _CustomImages(images: _imagesUrls),

            // Container(
            //   color: Colors.blue,
            //   child: Text(
            //     'Hello Flutter',
            //     style: TextStyle(fontSize: 26, color: Colors.white),
            //   ),
            // ),
            // Text('Helo world'),
            // TextField(
            //   decoration: InputDecoration(labelText: 'Username'),
            // ),
            // Column(
            //   children: [
            //     Text('item 1'),
            //     Text('item 2'),
            //     Text('item 3'),
            //   ],
            // ),
            // Row(
            //   children: [
            //     Text('item 1'),
            //     Text('item 2'),
            //     Text('item 3'),
            //   ],
            // ),
            // ElevatedButton(
            //   onPressed: () {
            //     print('tocou no botao');
            //   },
            //   child: Text('Icrementar'),
            // ),
            // Icon(Icons.star, color: Colors.blue, size: 30),
            // Card(
            //   child: ListTile(
            //     title: Text('titulo'),
            //     subtitle: Text('subtitulo'),
            //     leading: Icon(Icons.info),
            //     trailing: Icon(Icons.arrow_forward),
            //   ),
            // ),

            // ListView.builder(
            //   itemCount: 400,
            //   physics: NeverScrollableScrollPhysics(),
            //   shrinkWrap: true,
            //   itemBuilder: (context, index) {
            //     return _CustomAnimation();
            //   },
            // ),
          ],
        ),
      ),
    );
  }
}
