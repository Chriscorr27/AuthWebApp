# Generated by Django 3.1.1 on 2020-10-06 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CRUD_task', '0008_remove_mail_model_chat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat_model',
            name='chat',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='chat_model',
            name='mail',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mail', to='CRUD_task.mail_model'),
        ),
    ]