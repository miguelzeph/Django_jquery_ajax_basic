from django.urls import path

from .views import home,fruits_vegetables

urlpatterns = [
    path('home/',home,name='home'),
    path('fruits-vegetables/',fruits_vegetables,name='fruits-vegetables'),
]
