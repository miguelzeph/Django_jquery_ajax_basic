from django.shortcuts import render

def home(request):
    return render(request, 'ajax_templates/home.html')
