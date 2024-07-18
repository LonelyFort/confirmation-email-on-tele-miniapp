from typing import Final
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import os
from dotenv import load_dotenv

load_dotenv(".env.local")

TOKEN: Final = os.getenv('TELEGRAM_BOT_API_KEY', default="Key not found!")
BOT_USERNAME: Final = '@nusemailbot'

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Please enter your NUS Email Address by opening the web app at the bottom left of the screen.")

async def error(update: Update, context: ContextTypes.DEFAULT_TYPE):
    print(f'Update {update} caused error {context.error}')

if __name__ == '__main__':
    print('Starting..')
    app = Application.builder().token(TOKEN).build()

    app.add_handler(CommandHandler('start', start_command))

    app.add_error_handler(error)

    print('Polling..')
    app.run_polling(poll_interval=5)