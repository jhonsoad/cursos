part of './image_gallery.dart';

class _CustomImages extends StatefulWidget {
  const _CustomImages({super.key, required this.images});

  final List<String> images;

  @override
  State<_CustomImages> createState() => _CustomImagesState();
}

class _CustomImagesState extends State<_CustomImages> {
  void _removeImage(int index) {
    setState(() {
      widget.images.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      physics: NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
      ), // numero de colunas
      itemCount: widget.images.length,
      itemBuilder: (context, index) {
        return GestureDetector(
          onTap: () {
            Navigator.pushNamed(
              context,
              Routes.imageView,
              arguments: widget.images[index],
            );
          },
          onLongPress: () {
            _removeImage(index);
          },
          child: Card(child: Image.network(widget.images[index])),
        );
      },
    );
  }
}
