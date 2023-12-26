export default {
  TOP_CONTENT: `<!DOCTYPE html>
  <html>
     <head>
        <title> COMPLAINT MARKED UP </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css" type="text/css">
        <link
           href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
           rel="stylesheet"
           />
       <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600&display=swap" rel="stylesheet">
       <style>
       * {margin:0;}
   body {font-family: 'Poppins', sans-serif;font-size:16px;color:#000;}
   .container {margin: 0 auto;width:850px;}
   header {margin: 60px 0px 40px;}
   header p {text-align:left;line-height: 28px;font-size:16px;font-family: 'Noto Serif', serif;margin-bottom: 0 !important;}
   header .small{display: inline-block;width: 130px;text-align: center;}
   main p {text-align:left;line-height: 28px;font-size:16px;margin-bottom: 10px;}
   h1 {font-size:22px;text-align:center;margin: 12px 0px;font-family: 'Noto Serif', serif;font-weight: 600;}
   .brown-content {display:flex;flex-wrap:wrap;margin:40px 0px 60px;}
   .brown-left {display: flex;flex-wrap: wrap;width: 50%;border-right: dashed 2px #9b9b9b;padding-right: 30px;border-bottom: solid 1px #9b9b9b;}  
   .brown-content-list {display: inline-block;width: 100%;margin-bottom:25px;}
   .brown-content-list h4 {font-family: 'Noto Serif', serif;font-weight: 600;font-size: 22px;padding-bottom: 10px;text-transform: uppercase;}
   .brown-content-list p {font-size: 16px;font-family: 'Poppins', sans-serif !important;font-weight: 600 !important;margin-bottom:0px !important;word-wrap: break-word;}
   .brown-right {display: flex;flex-wrap: wrap;width:40%;padding-left:20px;}
   .brown-left p {font-weight:600;color:#000;width: 100%;margin-bottom: 2px;font-family: 'Noto Serif', serif;word-wrap: break-word;}
   .brown-right p {font-weight:600;color:#000;width: 100%;margin-bottom: 2px;font-family: 'Noto Serif', serif;word-wrap: break-word;}
   .brown-content span {display: inline-block;width: 100%;text-align: right;margin-bottom:40px;font-weight: 600;}
   .michael-bottom-content {display: inline-block;font-weight: 600;border-top: solid 2px #000;padding-top: 10px;padding-bottom:300px;text-align: center;}
   .michael-bottom-content span {display: inline-block;width: 100%;text-align: center;color: #9f9f9f;font-family: 'Noto Serif', serif;}
   h2 {font-size:24px;text-align:center;margin: 12px 0px;text-decoration: underline;font-family: 'Noto Serif', serif;font-weight: 600;}
   ol {padding: 0 30px;}
   ol li {padding: 8px 0;font-size:16px;line-height: 28px;}
   .alpha {padding-left: 40px!important;}
   .alpha li {list-style: lower-alpha;}
   .declare-content {display: inline-block;width: 100%;}
   .declare-content h1 {margin: 30px 0px 50px;}
   .declare-content p:last-child {margin:50px 0 30px;}
   .content-list {display: inline-block;width: 100%;margin-top:30px;}
   .content-list ol {padding: 0;}
   .content-list ol li {font-family: 'Noto Serif', serif;font-weight: 600;font-size: 20px;}
   .content-list ol p {color:#666;font-family: 'Noto Serif', serif;margin-bottom: 20px;}
   .content-list ul {padding-left:3px;}
   .content-list ul li {text-align:left;line-height: 28px;font-size:16px;margin-bottom:20px;list-style-type: none;}
   footer {display:flex;justify-content: flex-end;margin: 70px 0 200px;}
   footer p {border-top: solid 2px #000;padding: 5px 50px 0 50px;font-weight: 600;font-size: 18px;font-family: 'Noto Serif', serif;margin-right: 32px;}
   .footer-content {font-family: 'Noto Serif', serif;font-weight: 600;font-size: 19px;text-align:center;margin: 60px 0px 30px;}
   .Companies-info {display: inline-block;width:100%;margin-bottom: 16px;margin-top: 24px;}
   .Companies-info h4  {font-family: 'Noto Serif', serif;font-weight: 600;font-size: 24px;padding-bottom: 10px;}
   .Companies-info ol {margin-bottom: 0px;}
   .Companies-info ol li {font-family: 'Noto Serif', serif;font-weight: 600;font-size:16px;padding:10px 0;}
   .info-content {margin-top: 15px;}
   .info-content h3 {font-family: 'Noto Serif', serif;font-weight: 600;font-size: 24px;padding-bottom: 16px;}
   .info-list {display: inline-block;width:100%;margin-bottom: 16px;}
   .info-list ol .last {margin-bottom:20px !important;}
   .info-list ol li {font-family: 'Noto Serif', serif;font-weight: 600;font-size:16px;padding:1px 0;}
   .info-list p {font-family: 'Noto Serif', serif;font-weight: 600;font-size:16px;margin-bottom:1px !important;}
   .page-2 h1 {padding-top:100px}
   
   .page-1 {padding: 0 16px;page-break-inside: avoid;}
   .page-2 {padding: 0 16px;page-break-inside: avoid;}
   .page-3 {padding: 0 16px;page-break-inside: avoid;padding-top:60px;}
   .page-4 {padding: 0 16px;page-break-inside: avoid;padding-top:60px;}
   .page-5 {padding: 0 16px;page-break-inside: avoid;padding-top:60px;}
   .page-6 {padding: 0 16px;page-break-inside: avoid;padding-top:60px;}
   .page-7 {padding: 0 16px;page-break-inside: avoid;padding-top: 20px;}
   .page-8 {padding: 0 16px;page-break-inside: avoid;padding-top: 50px;}
   .page-9 {padding: 0 16px;page-break-inside: avoid;padding-top: 10px;}
   .page-10 {padding: 0 16px;page-break-inside: avoid;padding-top:50px;}
   .page-11 {padding: 0 16px;page-break-inside: avoid;padding-top:60px;}
   
   
   @media only screen and (min-width:750px) and (max-width:869px) {
   .container {width:90%;}	
   }
   @media screen and (max-width: 749px) {
   body {font-size:14px;}
   .container {width:90%;}   
   .brown-left {width:100%;border-right: 0;padding-right: 0px;}
   .brown-right {width:100%;padding-left: 0px;padding-top:20px;}
   .michael-bottom-content {padding-bottom: 10px;margin-top:20px;}
   .footer-content {margin: 16px 0px 24px;font-size: 16px;}
   footer {margin: 35px 0px 25px;}
   header {margin: 20px 0px 20px;}
   h1 {font-size: 16px;}
   .brown-content {margin: 16px 0px 15px;}
   .brown-left p{font-size:14px;margin-bottom: 10px !important;}
   .brown-right p {font-size:14px;margin-bottom: 10px !important;}
   .brown-content span {margin-bottom: 16px;}
   main p {font-size:14px;margin-bottom:20px !important;}
   h2 {font-size: 16px;}
   .declare-content h1 {margin: 0px 0px 15px;}
   .declare-content p:last-child {margin: 25px 0 40px;}
   header p {margin-bottom:5px !important;}
   .content-list ol li {font-size: 16px;}
   .content-list {margin-top:0px;}
   ol li {font-size: 14px;}
   .content-list ul li {font-size: 14px;}
   ol, .content-list ol {padding-left:16px;}
   .content-list ul {padding-left: 24px;}
   .Companies-info h4, .info-content h3 {font-size: 16px;}
   .Companies-info p {margin-bottom: 5px !important;}
   .info-list p {margin-bottom: 2px !important;}
   .brown-content-list {margin-bottom: 10px;}
   .brown-content-list h4 {font-size: 18px;}
   }
       </style>
     </head>
     <body>`,

  BOTTOM_CONTENT: `
</body></html>`,
};
