function solution() {
  let visibleLetters = '';
  $('table td').each(function() {
    const backgroundColor = $(this).css('background-color');
    const textColor = $(this).css('color');
    if (backgroundColor !== textColor) {
      visibleLetters += $(this).text();
    }
  });
  return visibleLetters;
}