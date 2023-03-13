        var list1 = []; //firstname
		var list2 = []; //lastname
		var list3 = []; //address
		var list4 = []; //pincode
        var list5 = []; //state 
        var list6 = []; // country
        var list7 = []; // gender
        var list8 = []  // food

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("fname").value;
			list2[x] = document.getElementById("lname").value;
			list3[x] = document.getElementById("add").value;
			list4[x] = document.getElementById("pincode").value;
            list5[x] = document.getElementById("state").value;
            list6[x] = document.getElementById("country").value;
            list7[x] = document.getElementById("gender").value;
            list8[x] = document.getElementById("food").value;
            

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
            var cel7 = NewRow.insertCell(6);
            var cel8 = NewRow.insertCell(7);
            

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];
            cel8.innerHTML = list8[x];

			n++;
			x++;
		}
