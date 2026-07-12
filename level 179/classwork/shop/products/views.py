from django.http import HttpResponse
from .data import products_database


def products_list(request):
    return HttpResponse(str(products_database))


def product_detail(request, product_id):
    for product in products_database:
        if product['id'] == product_id:
            return HttpResponse(str(product))

    return HttpResponse("Product not found")