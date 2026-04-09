import 'dart:typed_data';

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:image_gallery_app/l10n/app_localizations.dart';
import 'package:image_picker_for_web/image_picker_for_web.dart';
import 'package:image_picker_platform_interface/image_picker_platform_interface.dart';

import 'main.dart';

class ImageGalleryApp extends StatefulWidget {
  @override
  _ImageGalleryAppState createState() => _ImageGalleryAppState();
}

class _ImageGalleryAppState extends State<ImageGalleryApp> {
  Uint8List? _image;
  String? _imageName;
  bool? loading;

  Future<void> _pickImage() async {
    final ImagePickerPlugin _picker = ImagePickerPlugin();
    final pickedFile = await _picker.getImage(
      source: ImageSource.gallery,
    );

    _imageName = pickedFile?.name;

    if (pickedFile != null) {
      final bytes = await pickedFile.readAsBytes();

      setState(() {
        _image = bytes;
      });
    }
  }

  Future<void> _uploadImage() async {
    try {
      final instance = Firebase.app(firebaseAppName);
      final storageRef = FirebaseStorage.instanceFor(
        app: instance,
      ).ref();

      final imageRef = storageRef.child('images/$_imageName');
      final uploadTask = imageRef.putBlob(
        _image!,
        SettableMetadata(),
      );

      setState(() {
        loading = true;
      });

      await uploadTask.whenComplete(() => null);

      setState(() {
        loading = false;
      });

      print('Imagem enviada');
    } catch (e) {
      print('Falha ao fazer upload da imagem $e');
    }
  }

  void _changeLanguage(Locale locale) {
    setState(() {
      MyApp.setLocale(context, locale);
    });
  }

  _changeTheme(ThemeData theme) {
    MyApp.setTheme(context, theme);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      appBar: AppBar(
        backgroundColor: Theme.of(
          context,
        ).appBarTheme.backgroundColor,
        elevation: 1,
        centerTitle: true,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.photo_library_rounded),
            const SizedBox(width: 8),
            Text.rich(
              TextSpan(
                children: [
                  TextSpan(
                    text: AppLocalizations.of(context)!.title,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.blueGrey[800],
                    ),
                  ),
                  TextSpan(
                    text: AppLocalizations.of(context)!.sub_title,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w300,
                      color: Colors.blueAccent,
                    ),
                  ),
                ],
              ),
            ),
          ], // AppLocalizations.of(context)!.title,
        ),
        actions: [
          IconButton(
            icon: Icon(
              Icons.brightness_6,
              color: Colors.blueGrey[800],
            ),
            onPressed: () {
              if (Theme.of(context).brightness == Brightness.dark) {
                _changeTheme(lightTheme);
              } else {
                _changeTheme(darkTheme);
              }
            },
          ),
          PopupMenuButton<String>(
            icon: Icon(Icons.language),
            onSelected: (String value) {
              if (value == 'English') {
                _changeLanguage(const Locale('en'));
              } else if (value == 'Português') {
                _changeLanguage(const Locale('pt'));
              }
            },
            itemBuilder: (BuildContext constext) {
              return {'English', 'Português'}.map((String choice) {
                return PopupMenuItem<String>(
                  value: choice,
                  child: Text(choice),
                );
              }).toList();
            },
          ),
        ],
      ),
      body: Stack(
        children: [
          Center(
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15),
                ),
                elevation: 8,
                shadowColor: Colors.black26,
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      Container(
                        width: 300,
                        height: 300,
                        decoration: BoxDecoration(
                          color: Colors.grey[200],
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: Colors.blueGrey.shade100,
                          ),
                        ),
                        child: _image != null
                            ? ClipRRect(
                                borderRadius: BorderRadius.circular(
                                  12,
                                ),
                                child: Image.memory(
                                  _image!,
                                  fit: BoxFit.cover,
                                ),
                              )
                            : Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.center,
                                children: [
                                  Icon(Icons.image, size: 80),
                                  const SizedBox(height: 10),
                                  Text(
                                    AppLocalizations.of(
                                      context,
                                    )!.no_image_selected,
                                    style: TextStyle(
                                      color: Colors.blueGrey,
                                    ),
                                  ),
                                ],
                              ),
                      ),
                      const SizedBox(height: 20),
                      ElevatedButton.icon(
                        onPressed: _pickImage,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(20),
                          ),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 20,
                            vertical: 12,
                          ),
                        ),
                        icon: const Icon(
                          Icons.photo_library,
                          color: Colors.white,
                        ),
                        label: Text(
                          AppLocalizations.of(context)!.select_image,
                        ),
                      ),
                      const SizedBox(height: 10),
                      if (_image != null)
                        ElevatedButton.icon(
                          onPressed: () async {
                            if (_image != null) {
                              await _uploadImage();
                            }
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            padding: const EdgeInsets.symmetric(
                              horizontal: 20,
                              vertical: 12,
                            ),
                          ),
                          icon: const Icon(
                            Icons.cloud_upload,
                            color: Colors.white,
                          ),
                          // label: const Text('Fazer Upload'),
                          label: Text(
                            AppLocalizations.of(
                              context,
                            )!.image_uploaded,
                          ),
                        ),
                      const SizedBox(height: 20),
                      // if (loading != null &&
                      //     loading == true)
                      //   const CircularProgressIndicator(),
                      // if (loading != null &&
                      //     loading == false)
                      //   Text(
                      //     AppLocalizations.of(
                      //       context,
                      //     )!.image_uploaded,
                      //   ),
                    ],
                  ),
                ),
              ),
            ),
          ),
          if (loading == true)
            Container(
              color: Colors.black.withOpacity(0.6),
              child: Center(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                      elevation: 10,
                      child: Padding(
                        padding: const EdgeInsets.all(26),
                        child: Column(
                          children: [
                            const CircularProgressIndicator(
                              color: Colors.blueAccent,
                              strokeAlign: 5,
                            ),
                            const SizedBox(height: 45),
                            Text(
                              'Uploading...',
                              style: TextStyle(
                                fontSize: 16,
                                color: Colors.blueGrey[800],
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
