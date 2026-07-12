from django.shortcuts import render, get_object_or_404, redirect
from .models import BMW


def bmw_list(request):
    cars = BMW.objects.all()
    return render(request, 'bmw/list.html', {'cars': cars})


def bmw_detail(request, id):
    car = get_object_or_404(BMW, id=id)
    return render(request, 'bmw/detail.html', {'car': car})


def bmw_delete(request, id):
    car = get_object_or_404(BMW, id=id)
    car.delete()
    return redirect('bmw_list')