"""Barrage_analysis URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import ResultView, IndexView, ActiveUsersView, PlotChangesView, PlayHeatView, ClassicBarrageView, EmotionalChangesView, OverallEvaluationView, FeatureChangesView

urlpatterns = [
    path('admin/', admin.site.urls),  # 没什么用
    path('', IndexView.as_view(), name='index'),  # 主页
    path('result/', ResultView.as_view(), name='result'),  # 爬弹幕
    path('active-users/', ActiveUsersView.as_view(), name='active-users'),
    path('plot-changes/', PlotChangesView.as_view(), name='plot-changes'),
    path('play-heat/', PlayHeatView.as_view(), name='play-heat'),
    path('classic-barrage/', ClassicBarrageView.as_view(), name='classic-barrage'),
    path('emotion-changes/', EmotionalChangesView.as_view(), name='emotion-changes'),
    path('overall-evaluation/', OverallEvaluationView.as_view(), name='result'),
    path('feature-changes/', FeatureChangesView.as_view(), name='feature-changes'),

]
