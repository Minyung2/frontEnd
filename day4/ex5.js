
let text = "I am Javascript sam.";
     text.length   //length 는 속성, () 가 있는 것은 메소드 입니다. 
     document.write('<br>');
     document.write('단어 위치찾기:' + text.indexOf('am'));
     document.write('<br>');
     document.write('단어 위치찾기:' + text.lastIndexOf('am'));
     document.write('<br>');
     let result = text.substring(7, 11); //11은 포함 안됨.
     document.write('문자열 추출 1: ' + result);document.write('<br>');
     document.write('문자열 추출 2: ' +text.slice(7,11));
     document.write('<br>');

     result = text.replace('javascript', 'jsp'); //대소문자구분해서 일치하는 것을 변환.

     let x = "John";     //string 타입
     let y = new String("John");    //객체 생성
     let z = new String("John");    //
     document.write("x,y 동등 비교 : " + (x==y) + "<br>");
     document.write("x,y 일치 비교 : " + (x===y)+"<br>");   //false
     document.write("y,z 동등 비교 : " + (z==y)+ "<br>");
     document.write("y,z 일치 비교 : " + (z===y)+ "<br>");
     let str = "Apple, Banana, Kiwi";
     document.write(str.slice(-12,-6));document.write('<br>');
     let test = "The rain in SPAIN stays mainly in the plain"; 
     document.write(test.match(/ain/g)); // sp'ain', m'ain'ly, pl'ain'
