import 'dart:convert';
import 'package:http/http.dart' as http;

import 'urls.dart';

Future<void> findAll(http.BaseClient client) async {
  final response = await client.get(Uri.parse(urlbase));

  if (response.statusCode == 200) {
    var data = jsonDecode(response.body);
    print("GET: $data");
  } else {
    throw Exception('erro ao pegar informacoes');
  }
}
