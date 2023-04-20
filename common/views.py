from django.shortcuts import render
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.contrib import messages
from django.contrib.auth.decorators import user_passes_test



class MyLoginView(LoginView):
    redirect_authenticated_user = True
    success_url = '/' 
    template_name = 'login.html'
    
    def form_invalid(self, form):
        messages.error(self.request, 'Natogri login yoki parol')
        return self.render_to_response(self.get_context_data(form=form))


@user_passes_test(lambda u: u.is_superuser)
def home(request):
    return render(request, 'index.html')

@user_passes_test(lambda u: u.is_superuser)
def order(request):
    return render(request, 'order_list.html')

@user_passes_test(lambda u: u.is_superuser)
def queue(request):
    return render(request, 'navbat.html')

@user_passes_test(lambda u: u.is_superuser)
def washing(request):
    return render(request, 'washing.html')

@user_passes_test(lambda u: u.is_superuser)
def settings(request):
    return render(request, 'settings.html')
