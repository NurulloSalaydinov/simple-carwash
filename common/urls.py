from django.urls import path
from django.contrib.auth.views import LogoutView

from . import views

app_name = 'common'

urlpatterns = [
    path('', views.home, name='home'),
    path('order/', views.order, name='order'),
    path('queue/', views.queue, name='queue'),
    path('washing/', views.washing, name='washing'),
    path('settings/', views.settings, name='settings'),
    path('login/', views.MyLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout')
]

