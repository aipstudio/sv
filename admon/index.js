var name = 'img/экраны_май_'; //имена файлов
var jj = 69; //количество файлов

var q = '', qq = '';
var arr_a = [], arr_b = [];

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

for (var j = 1; j < jj; j++) {
  q = '';
  q = q + '<div id="div_list" class="carousel-item" class="d-block w-100" data-interval="20000">';
  q = q + '<img src="' + name + j + '.jpg" height="1080"></div>';
  arr_a.push(q);
}

arr_b = shuffle(arr_a);
for (var i = 0; i < arr_b.length; i++) {
  qq = qq + arr_b[i];
  //alert(arr_a[i]);
}

$('#list_file').append(qq);
$('#div_list').attr('class', 'carousel-item active');
