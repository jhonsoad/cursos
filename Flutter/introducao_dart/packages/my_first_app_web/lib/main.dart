import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Meu primeiro app flutter'),
        ),
        body: Center(
          child: Column(
            children: [
              Text(
                "Olá, Flutter",
                style: TextStyle(fontSize: 26),
              ),
              Row(
                children: [
                  Container(
                    color: Colors.blue,
                    child: Text(
                      "container 1",
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  Container(
                    color: Colors.red,
                    child: Text(
                      "container 2",
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ],
              ),
              Container(
                color: Colors.purple,
                child: Text('Container 3'),
              ),
              ElevatedButton(
                onPressed: () {
                  print('botao pressionado');
                },
                child: Text('Clique aqui'),
              ),
              ListTile(
                leading: Icon(Icons.map),
                title: Text('Mapa'),
              ),
              ListTile(
                leading: Icon(Icons.phone),
                title: Text('Phone'),
              ),
              ListTile(
                leading: Icon(Icons.pages),
                title: Text('Pages'),
              ),
              TextFormField(
                decoration: const InputDecoration(
                  border: UnderlineInputBorder(),
                  labelText: 'Enter your username',
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
