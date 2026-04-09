import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:image_gallery_android_app/image_gallery.dart';
import 'package:image_gallery_android_app/image_view.dart';
import 'package:image_gallery_android_app/login_screen.dart';
import 'package:image_gallery_android_app/register_screen.dart';
import 'routes.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Image gallery app',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: Routes.login,
      routes: {
        Routes.register: (context) => const RegisterScreen(),
        Routes.imageView: (context) => ImageView(),
        Routes.login: (context) => const LoginScreen(),
        Routes.imageGallery: (context) => ImageGallery(),
      },
    );
  }
}

// class _CustomAnimation extends StatefulWidget {
//   @override
//   State<_CustomAnimation> createState() => _CustomAnimationState();
// }

// class _CustomAnimationState extends State<_CustomAnimation> {
//   Color _color = Colors.blue;
//   double _width = 200.0;
//   double _height = 200.0;

//   @override
//   void initState() {
//     super.initState();

//     // runs every 1 second
//     Timer.periodic(new Duration(seconds: 1), (timer) {
//       _change();
//     });
//   }

//   void _change() {
//     var rng = Random();
//     var randomColor = Color(
//       (math.Random().nextDouble() * 0xFFFFFF).toInt(),
//     ).withOpacity(1.0);

//     setState(() {
//       _color = randomColor;
//       _width = rng.nextInt(200).toDouble();
//       _height = rng.nextInt(200).toDouble();
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     return AnimatedContainer(
//       duration: const Duration(seconds: 1),
//       curve: Curves.easeInOut,
//       width: _width,
//       height: _height,
//       color: _color,
//       child: const Center(
//         child: Text(
//           'Tap me!',
//           style: TextStyle(color: Colors.white, fontSize: 20.0),
//         ),
//       ),
//     );
//   }
// }
