export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Global Header')
        .icon(() => '🔗')
        .child(
          S.editor()
            .schemaType('header')
            .documentId('header')
        ),
      // Singleton Footer
      // S.listItem()
      //   .title('Global Footer')
      //   .icon(() => '🔗')
      //   .child(
      //     S.editor()
      //       .schemaType('footer')
      //       .documentId('footer')
      //   ),

      S.documentTypeListItem('landingPage'),
    ])
