"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
from data_manager import api, views
from django.urls import include, path
from rest_framework.routers import DefaultRouter

app_name = 'data_manager'
router = DefaultRouter()
router.register(r'views', api.ViewAPI, basename='view')

urlpatterns = [
    path('api/dm/', include((router.urls, app_name), namespace='api')),
    path('api/dm/columns/', api.ProjectColumnsAPI.as_view(), name='dm-columns'),
    path('api/dm/project/', api.ProjectStateAPI.as_view(), name='dm-project'),
    path('api/dm/actions/', api.ProjectActionsAPI.as_view(), name='dm-actions'),
    path('manage/projects/<int:pk>/', views.task_page, name='project-data'),
    path('manage/projects/<int:pk>/data/', views.task_page, name='project-data'),
    path('manage/projects/<int:pk>/data/import', views.task_page, name='project-import'),
    path('manage/projects/<int:pk>/data/export', views.task_page, name='project-export'),
    path('tasks/<int:pk>/', views.task_page, name='tasks-data'),
    path('tasks/<int:pk>/data/', views.task_page, name='tasks-data'),
    path('tasks/<int:pk>/data/import', views.task_page, name='tasks-import'),
    path('tasks/<int:pk>/data/export', views.task_page, name='tasks-export'),
]
