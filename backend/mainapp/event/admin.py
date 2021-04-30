from django.contrib import admin

from .models import Event


# EVENT ADMIN
class EventAdmin(admin.ModelAdmin):
    """
    Admin Form for Event. List Filter: date. Fieldsets: date, start_time, end_time, and truck. Read Only: uuid. Search Fields: date.
    """
    list_filter = ('date',)

    fieldsets = (
        (None, {'fields': ('date', 'start_time', 'end_time',)}),
        ('Truck', {'fields': ('truck',)}),
    )

    readonly_fields = ('uuid',)

    search_fields = ('date',)


admin.site.register(Event, EventAdmin)
