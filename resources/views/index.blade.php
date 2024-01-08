<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Adilo</title>
    <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
    @vite(['resources/js/app.js', 'resources/css/app.less'])
</head>
<body>
    <div id="app" class="w-full h-full"></div>
</body>
</html>