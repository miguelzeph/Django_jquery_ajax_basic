from django.shortcuts import render

def home(request):
    return render(request, 'jquery_templates/home.html')
