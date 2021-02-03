
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Jquery
    path('jquery/',include('jquery.urls')),
    # Ajax
    path('ajax/',include('ajax.urls')),
]
