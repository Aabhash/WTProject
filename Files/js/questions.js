function clearradio()
{
	var all = document.getElementsByClassName("radio4");
	for( var i = 0; i<all.length; i++)
	{
		all[i].checked = true;
	}
	renable();
}

function validate()
{
	var buttonText = document.getElementById('buttonspan');
	var x = document.getElementById('pr');

	if(buttonText.innerHTML == "NEXT")
	{
		changeTable(); 
		pr.style.width ="50%";
		pr.innerHTML = "1/2";
		buttonText.innerHTML ="FINISH";
		
	}
	else if (buttonText.innerHTML == "FINISH")
	{
		pr.style.width ="100%";
		pr.innerHTML = "Complete";
		buttonText.innerHTML ="FINISHED";
		load(); 
	}
}

function changeTable()
{
	var newTable = document.getElementById('QuestionSet2');
	var oldTable = document.getElementById('QuestionSet1');
	
	newTable.style.display="inline";		
	oldTable.style.display="none";

}

function load()
{
	var e = 0, s = 0;
	var arr = [e,s];
	arr = score(e,s);
	rdisable();
	alert("Load");
}

function score(escore,sscore)
{
	var a = document.getElementsByTagName("input");

	for(var j = 0; j < a.length; j++)
	{
		var y = a[j];
		if(y.checked)
		{
			if(y.name == "Q1" || y.name == "Q2" || y.name == "Q3" || y.name == "Q4" || y.name == "Q5")
			{
				if(y.className == "radio1")
					sscore += 4;
				else if(y.className == "radio2")
					sscore += 2;
				else if(y.className == "radio3")
					sscore += 1;
				else if(y.className == "radio4")
					sscore += 0;
				else if(y.className == "radio5")
					sscore -= 1;
				else if(y.className == "radio6")
					sscore -= 2;
				else if(y.className == "radio7")
					sscore -= 4;	
			}
			else
			{
				if(y.className == "radio1")
					escore += 4;
				else if(y.className == "radio2")
					escore += 2;
				else if(y.className == "radio3")
					escore += 1;
				else if(y.className == "radio4")
					escore += 0;
				else if(y.className == "radio5")
					escore -= 1;
				else if(y.className == "radio6")
					escore -= 2;
				else if(y.className == "radio7")
					escore -= 4;
			}

		}
	}
	return [escore,sscore];
}

function rdisable()
{
	var a = document.getElementsByTagName("input");
	for(var x = 0; x < a.length; x++)
	{
		a[x].disabled = true;
	}
}

function renable()
{
	var a = document.getElementsByTagName("input");
	for(var x = 0; x < a.length; x++)
	{
		a[x].disabled = false;
	}
}