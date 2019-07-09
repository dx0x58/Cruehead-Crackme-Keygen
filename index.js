let input = prompt("Enter name (A-z chars):");

let char_hex = (a) => {
  return a.charCodeAt(0).toString(16);
}

let xor_hex = (a, b) => {
  return (parseInt(a + '', 16) ^ parseInt(b + '', 16)).toString(16);
}

// Sum username hex chars
let calc_str = (str) => {
  let hex_list = str.split('').map(char_hex);
  let sum = 0;
  hex_list.forEach(item => {
    sum += parseInt(item + '', 16)
  });

  return sum.toString(16);
}

// calc Password hash
let calc_pass = (str) => {
  count = 0;
  list = str.split('');
  list.forEach(item => {
    num = parseInt(calc_str(item), 16);
    num -= parseInt('30', 16);
    count *= parseInt('0A', 16);
    count += num;
  });

  return count.toString(16)
}



name = xor_hex(calc_str((input).toUpperCase()), '5678')

// go ahead while valid key not to be found
counter = 0;
for (; ;) {
  let pass = xor_hex(calc_pass(counter + ''), '1234');

  if (name == pass) {
    alert("Name: " + input + " Password: " + counter);
    break;
  }
  counter += 1;
}