from django.http import JsonResponse
from django.shortcuts import render


def index(request):
    name = request.GET.get('name', 'Anonymous')
    return JsonResponse({
        'message': f"Hello, {name}",
    })

