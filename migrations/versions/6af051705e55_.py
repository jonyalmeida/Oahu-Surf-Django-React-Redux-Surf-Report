"""empty message

Revision ID: 6af051705e55
Revises: 266216c44025
Create Date: 2020-11-12 19:41:52.967776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6af051705e55'
down_revision = '266216c44025'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('surfspots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=False),
    sa.Column('shore', sa.String(length=5), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('lat', sa.Float(), nullable=True),
    sa.Column('long', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('first_name', sa.String(length=40), nullable=True),
    sa.Column('last_name', sa.String(length=40), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('shore_order', sa.ARRAY(sa.String(length=5)), nullable=True),
    sa.Column('hashed_password', sa.String(length=128), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('favorites',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('surfspot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['surfspot_id'], ['surfspots.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'surfspot_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.drop_table('users')
    op.drop_table('surfspots')
    # ### end Alembic commands ###