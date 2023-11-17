let a,b;
a = prompt("Ievadi tekstu:");
b= 280 - a.length
alert("Teksts ir "+a.length+" simbolus garš. Vēl atlikusi vieta "+b+" no 280 simboliem");
alert(a.slice(0, 280));