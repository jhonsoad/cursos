import 'dart:convert';
import 'package:http/http.dart' as http;

import 'urls.dart';

Future<void> deleteOne(http.BaseClient client, int id) async {
  final response = await client.delete(Uri.parse('$urlbase/$id'));

  if (response.statusCode == 200) {
    var data = jsonDecode(response.body);
    print("DELETE: $data");
  } else {
    throw Exception('erro ao deletar');
  }
}
