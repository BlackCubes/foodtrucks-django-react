from django.contrib import admin

from .models import Event

# Register your models here.


# EVENT ADMIN
class EventAdmin(admin.ModelAdmin):
    """"""
    list_filter = ('date',)

    fieldsets = (
        (None, {'fields': ('date', 'start_time', 'end_time',)}),
        ('Geo Location', {'fields': ('geo_location',)}),
        ('Truck', {'fields': ('truck',)}),
    )

    readonly_fields = ('uuid,')

    search_fields = ('date',)


admin.site.register(Event, EventAdmin)
