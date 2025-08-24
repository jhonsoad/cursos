import 'dart:convert';
import 'package:http/http.dart' as http;

import 'models/create_post_model.dart';
import 'urls.dart';

Future<void> updateOne(http.BaseClient client, CreatePostModel data) async {

  var body = {
    "id": data.id,
    "body": data.body,
    "title": data.title,
  };

  var dataEncode = jsonEncode(body);

  final response = await client.put(
    Uri.parse(urlbase),
    body: dataEncode,
  );

  if (response.statusCode == 200) {
    var data = jsonDecode(response.body);
    print("PUT: $data");
  } else {
    throw Exception('erro ao atualizar');
  }
}
