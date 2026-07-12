from django.urls import path
from . import views

urlpatterns = [
    path('', views.bmw_list, name='bmw_list'),
    path('<int:id>/', views.bmw_detail, name='bmw_detail'),
    path('delete/<int:id>/', views.bmw_delete, name='bmw_delete'),
]