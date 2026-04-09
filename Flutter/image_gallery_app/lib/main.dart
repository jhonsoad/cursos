import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'image_gallery.dart';
import 'l10n/app_localizations.dart';

final ThemeData darkTheme = ThemeData(
  brightness: Brightness.dark,
  primaryColor: Colors.black,
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: Colors.black,
      foregroundColor: Colors.white,
    ),
  ),
  textTheme: TextTheme(
    titleLarge: TextStyle(fontSize: 32, color: Colors.grey),
  ),
);

final ThemeData lightTheme = ThemeData(
  brightness: Brightness.light,
  primaryColor: Colors.blue,
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: Colors.blue,
      foregroundColor: Colors.white,
    ),
  ),
  textTheme: TextTheme(
    titleLarge: TextStyle(fontSize: 32, color: Colors.pink),
  ),
);

const String firebaseAppName = 'web';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  var config = const FirebaseOptions(
    apiKey: "AIzaSyAJvwfmgUbErgntC3470BVCj_rqW6RvZbo",
    authDomain: "image-gallery-web-40cde.firebaseapp.com",
    projectId: "image-gallery-web-40cde",
    storageBucket: "image-gallery-web-40cde.firebasestorage.app",
    messagingSenderId: "76987236281",
    appId: "1:76987236281:web:633eede5ad87b774f50068",
  );

  await Firebase.initializeApp(
    name: firebaseAppName,
    options: config,
  );

  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  static void setTheme(BuildContext context, ThemeData theme) {
    _MyAppState? state = context
        .findAncestorStateOfType<_MyAppState>();
    state?.changeTheme(theme);
  }

  static void setLocale(BuildContext context, Locale newLocale) {
    _MyAppState? state = context
        .findAncestorStateOfType<_MyAppState>();
    state?.changeLocale(newLocale);
  }

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Locale? _locale = const Locale('pt');
  ThemeData _themeData = lightTheme;

  void changeTheme(ThemeData theme) {
    setState(() {
      _themeData = theme;
    });
  }

  void changeLocale(Locale locale) {
    setState(() {
      _locale = locale;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ImageGalleryApp(),
      locale: _locale,
      theme: _themeData,
      debugShowCheckedModeBanner: false,
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
    );
  }
}





// Mudança de apresentação das imagens dependendo o tamanho da tela
// class HomeScreen extends StatelessWidget {
//   final List<String> imageUrls = [
//     'https://cdn.pixabay.com/photo/2017/08/27/15/09/moraine-lake-2686353_1280.jpg',
//     'https://cdn.pixabay.com/photo/2017/08/07/22/10/lake-2608425_1280.jpg',
//     'https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_1280.jpg',
//     'https://cdn.pixabay.com/photo/2022/08/25/20/34/river-7411236_1280.jpg',
//   ];

//   @override
//   Widget build(BuildContext context) {
//     Size screenSize = MediaQuery.of(context).size;

//     return Scaffold(
//       appBar: AppBar(title: Text('Image gallery')),
//       body: // Lista array de imagens com padding e padroniza o height delas
//       screenSize.width < 600
//           ? ListView.builder(
//               itemCount: imageUrls.length,
//               itemBuilder: (context, index) {
//                 return Padding(
//                   padding: EdgeInsets.all(8),
//                   child: Image.network(
//                     imageUrls[index],
//                     height: 300,
//                     fit: BoxFit.cover,
//                   ),
//                 );
//               },
//             )
//           : GridView.builder(
//               //grid de imagens
//               gridDelegate:
//                   SliverGridDelegateWithFixedCrossAxisCount(
//                     crossAxisCount: screenSize.width > 1200
//                         ? 4
//                         : 3,
//                   ),
//               itemCount: imageUrls.length,
//               itemBuilder: (context, index) {
//                 return Padding(
//                   padding: EdgeInsets.all(8),
//                   child: Image.network(
//                     imageUrls[index],
//                     fit: BoxFit.cover,
//                   ),
//                 );
//               },
//             ),
//     );
//   }
// }


// MediaQuery e LayoutBuilder muda imagem conform tamanho da tela
// class HomeScreen extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     // Size screnSize = MediaQuery.of(context).size;

//     return Scaffold(
//       appBar: AppBar(title: Text('Image gallery')),
//       body: LayoutBuilder(
//         builder: (context, constraints) {
//           if (constraints.maxWidth < 600) {
//             return ListView(children: buildImageList());
//           } else {
//             return GridView.count(
//               crossAxisCount: 3,
//               children: buildImageList(),
//             );
//           }
//         },
//       ),
//       // Center(
//       //   child: screnSize.width < 600
//       //       ? Column(
//       //           children: [
//       //             Text('Small screen layout'),
//       //             Image.network(
//       //               'https://cdn.pixabay.com/photo/2017/08/27/15/09/moraine-lake-2686353_1280.jpg',
//       //             ),
//       //           ],
//       //         )
//       //       : Column(
//       //           children: [
//       //             Text('Large screen layout'),
//       //             Image.network(
//       //               'https://cdn.pixabay.com/photo/2017/08/07/22/10/lake-2608425_1280.jpg',
//       //             ),
//       //           ],
//       //         ),
//       // ),
//     );
//   }

  // List<Widget> buildImageList() {
  //   return List.generate(10, (index) {
  //     return Image.network(
  //       'https://cdn.pixabay.com/photo/2017/08/27/15/09/moraine-lake-2686353_1280.jpg',
  //     );
  //   });
  // }
// }
