from app.models import User, SurfSpot, favorites_table
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    # users
    mick = User(
        first_name='Mick',
        last_name="Fanning",
        email="mick@fanning.com",
        username="mick",
        password="password",
        shore_order=['north', 'south', 'west', 'east']
    )
    kelly = User(
        first_name="Kelly",
        last_name="Slater",
        email="kelly@slater.com",
        username="kelly",
        password="password",
        shore_order=['north', 'south', 'west', 'east']
    )
    felipe = User(
        first_name="Felipe",
        last_name="Toledo",
        email="felipe@toledo.com",
        username="felipe",
        password="password",
        shore_order=['north', 'south', 'west', 'east']
    )

    db.session.add(mick)
    db.session.add(kelly)
    db.session.add(felipe)
    db.session.commit()

    # surfspots
    china_walls = SurfSpot(
        name="China Walls",
        shore="South",
        lat=21.258294,
        long=-157.758453,
    )
    diamond_head = SurfSpot(
        name="Diamont Head",
        shore="South",
        lat=21.2549473,
        long=-157.8092937
    )
    kaisers = SurfSpot(
        name="Kaisers",
        shore="South",
        lat=21.2796733,
        long=-157.8389642
    )
    sand_island = SurfSpot(
        name="Sand Island",
        shore="South",
        lat=21.2979878,
        long=-157.8904362
    )
    mokuleia = SurfSpot(
        name="Mokuleia",
        shore="North",
        lat=21.5628127,
        long=-158.1419075
    )
    haleiwa = SurfSpot(
        name="Haleiwa",
        shore="North",
        lat=21.5778374,
        long=-158.1251151
    )
    waimea = SurfSpot(
        name="Waimea",
        shore="North",
        lat=21.6284412,
        long=-158.0809762
    )
    pipeline = SurfSpot(
        name="Pipeline",
        shore="North",
        lat=21.6485203,
        long=-158.0419607
    )
    tracks = SurfSpot(
        name="Tracks",
        shore="West",
        lat=21.3361012,
        long=-158.1380897
    )
    maili = SurfSpot(
        name="Maili",
        shore="West",
        lat=21.3904808,
        long=-158.1712936
    )
    makaha = SurfSpot(
        name="Makaha",
        shore="West",
        lat=21.463229,
        long=-158.2130769
    )
    sandys = SurfSpot(
        name="Sandys",
        shore="East",
        lat=21.305515,
        long=-157.6760727
    )
    makapuu = SurfSpot(
        name="Makapuu",
        shore="East",
        lat=21.305515,
        long=-157.6760727
    )
    north_beach = SurfSpot(
        name="North Beach",
        shore="East",
        lat=21.4533482,
        long=-157.7635274
    )
    goat_island = SurfSpot(
        name="Goat Island",
        shore="East",
        lat=21.5489781,
        long=-157.8614553
    )
    
    db.session.add(china_walls)
    db.session.add(diamond_head)
    db.session.add(kaisers)
    db.session.add(sand_island)
    db.session.add(mokuleia)
    db.session.add(haleiwa)
    db.session.add(waimea)
    db.session.add(north_beach)
    db.session.add(pipeline)
    db.session.add(tracks)
    db.session.add(maili)
    db.session.add(makaha)
    db.session.add(sandys)
    db.session.add(makapuu)
    db.session.add(goat_island)
    db.session.commit()

    # favorites
    entry1 = favorites_table.insert().values(
        surfspot_id=1,
        user_id=2
    )
    print(entry1)
    entry2 = favorites_table.insert().values(
        surfspot_id=5,
        user_id=2
    )
    entry3 = favorites_table.insert().values(
        surfspot_id=7,
        user_id=2
    )
    entry4 = favorites_table.insert().values(
        surfspot_id=12,
        user_id=2
    )
    entry5 = favorites_table.insert().values(
        surfspot_id=11,
        user_id=1
    )
    entry6 = favorites_table.insert().values(
        surfspot_id=6,
        user_id=1
    )
    entry7 = favorites_table.insert().values(
        surfspot_id=3,
        user_id=1
    )
    entry8 = favorites_table.insert().values(
        surfspot_id=8,
        user_id=3
    )

    db.session.execute(entry1)
    db.session.execute(entry2)
    db.session.execute(entry3)
    db.session.execute(entry4)
    db.session.execute(entry5)
    db.session.execute(entry6)
    db.session.execute(entry7)
    db.session.execute(entry8)
    db.session.commit()
