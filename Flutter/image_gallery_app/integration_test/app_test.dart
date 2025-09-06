import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:image_gallery_app/main.dart' as app;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Teste de integracao: carregamento inicial', (
    WidgetTester tester,
  ) async {
    app.main();

    await tester.pumpAndSettle(const Duration(seconds: 3));

    final selectedImageButton = find.text('Selecionar Imagem');
    expect(selectedImageButton, findsOneWidget);

    final selectLanguageIcon = find.byIcon(Icons.language);
    expect(selectLanguageIcon, findsOneWidget);
    await tester.tap(selectLanguageIcon);
    await tester.pumpAndSettle();

    final languageItemButton = find.text('English');
    expect(languageItemButton, findsOneWidget);
    await tester.tap(languageItemButton);
    await tester.pumpAndSettle();

    final selectedImageButton2 = find.text('Select Image');
    expect(selectedImageButton2, findsOneWidget);
  });
}
