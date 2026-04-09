import 'package:http/http.dart' as http;

class ClientInterceptor extends http.BaseClient {
  final http.Client _client = http.Client();

  @override
  Future<http.StreamedResponse> send(
    http.BaseRequest request,
  ) {
    request.headers['accept'] = 'application/json';
    request.headers['Content-Type'] = 'application/json';

    return _client.send(request);
  }
}
