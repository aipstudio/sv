html_text_1 = '''<!DOCTYPE html>
<html lang="en">

<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-13068021-9"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-13068021-9');
  </script>
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-1919611713249610",
      enable_page_level_ads: true
    });
  </script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <title id="serial_name"></title>
  <meta name="description" content="">
</head>

<body onload="set_nav()" style="background-color:#111111; color:#ffffff;">
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
    <a class="navbar-brand" href="/"><img src="/image/home.png" alt=""></a>
    <a id="serial_name" class="navbar-brand" href=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul id="nav" class="navbar-nav">
      </ul>
    </div>
  </nav>
  <div class="container-fluid" style="max-width: '''

html_text_2 = '''px;">
    <div class="row">
      <div class="col" style="text-align: center;">
        <h3 id="seria_name"> </h3>
        <h4 id="seria_desc"> </h4>
        <video id="id_video" class="img-fluid" preload="auto" controls>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-secondary float-left" onClick="back_click()">Предыдущая серия</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary float-right" onClick="next_click()">Следующая серия</button>
      </div>
    </div>
    <div class="row">
      <div class="col"><br>
        <h5 id="seria_desc2" align="justify"></h5>
      </div>
    </div>
    <div class="row">
      <div class="col"><br>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1919611713249610" data-ad-slot="6266445477" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.js" </script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
  <script src="js/jquery.cookie.js"></script>
  <script src="js/serial_page.js"></script>
</body>

</html>'''

f = open("lists\serial.list", "r", encoding="utf8")
for x in f:
  y = x.split('|')
  print(y[1])
  ff = open(y[1]+".html", "w", encoding="utf8")
  if y[1] == 'big_bang_theory':
    html_text_width = '1024'
  elif y[1] == 'silicon_valley':
    html_text_width = '854'
  elif y[1] == 'black_mirror':
    html_text_width = '1152'
  else :
    html_text_width = '1280'
  html_text = html_text_1 + html_text_width + html_text_2
  ff.write(html_text)
  ff.close()
f.close()
