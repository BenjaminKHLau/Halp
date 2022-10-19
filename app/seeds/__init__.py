from flask.cli import AppGroup
from .users import seed_users, undo_users
from .businesses import seed_businesses, undo_businesses
from .categories import seed_categories, undo_categories
from .reviews import seed_reviews, undo_reviews
# , seed_business_images, undo_business_images, seed_categories, undo_categories

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_businesses()
    seed_categories()
    seed_reviews()
    # seed_business_images()
    # seed_categories()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_businesses()
    undo_categories()
    undo_reviews()
    # undo_business_images()
    # undo_categories()
    # Add other undo functions here
