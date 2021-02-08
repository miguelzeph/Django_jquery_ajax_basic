from django.shortcuts import render

def home(request):
    return render(request, 'jquery_templates/home.html')

def fruits_vegetables(request):
    return render(request,'jquery_templates/fruits_vegetables.html')
