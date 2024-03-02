from django.urls import path

from . import views

app_name = "polls"
urlpatterns = [
    path('', views.home, name="home"),
    # ex;  /polls/
    path("polls/", views.IndexView.as_view(), name="index"),
    #  ex: /polls/5/
    path("polls/<int:pk>/", views.DetailView.as_view(), name="detail"),
    # ex: /polls/5/results
    path("polls/<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    # ex: /polls/5/vote
    path("polls/<int:question_id>/vote/", views.vote, name="vote"),
    path('login/', views.login_view, name="login"),
    path('logout/', views.logout_view, name="logout"),
    path('signup/', views.signup_view, name="signup"),
    path('users/<username>/', views.profile, name='profile'),
    path('accounts/login/', views.login_view, name='accountlogin'),
]