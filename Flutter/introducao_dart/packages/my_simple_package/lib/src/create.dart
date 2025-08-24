import 'dart:convert';
import 'package:http/http.dart' as http;
import 'models/create_post_model.dart';
import 'urls.dart';

Future<void> create(http.BaseClient client, CreatePostModel data) async {
  var body = {
    "id": data.id,
    "body": data.body,
    "title": data.title,
  };

  var dataEnconde = jsonEncode(body);

  final response = await client.post(
    Uri.parse(urlbase),
    body: dataEnconde,
  );

  if (response.statusCode == 201) {
    var data = jsonDecode(response.body);
    print("POST: $data");
  } else {
    throw Exception('erro ao criar');
  }
}
