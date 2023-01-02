function start()
{
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SfAvsPdwU/model.json', modelReady);
}

function modelReady()
{
  classifier.classify(gotResults);
}

function gotResults(error, results)
{
  if (error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);

    var randomNumeberR = Math.floor(Math.random() * 255) + 1;
    var randomNumeberB = Math.floor(Math.random() * 255) + 1;
    var randomNumeberG = Math.floor(Math.random() * 255) + 1; 

    document.getElementById("h3animal").innerHTML = 'Posso ouvir - ' + results[0].label;
    document.getElementById("h3animal").style.color = "rgb(" + randomNumeberR + "," + randomNumeberG + "," + randomNumeberB +")";
  
    img = document.getElementById("img1");

    if (results[0].label == "Latido")
    {
      img.src = "bark.gif";
    }
    
    else if (results[0].label == "Miado")
    {
      img.src = "lero.png";
    }
    
    else if (results[0].label == "Silvar")
    {
      img.src = "folu.jpg";
    }
    
    else
    {
      img.src = "listen.gif";
    }
  }
}

