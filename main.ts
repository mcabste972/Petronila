namespace SpriteKind {
    export const win = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Petronila.isHittingTile(CollisionDirection.Bottom)) {
        Petronila.vy = -180
    } else {
        Petronila.vy = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    piupiu = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . f 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Petronila, -200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    piupiu = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 f . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Petronila, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.win, function (sprite, otherSprite) {
    game.gameOver(true)
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    scene.setBackgroundImage(img`
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        `)
    effects.confetti.startScreenEffect()
    game.setGameOverMessage(true, "WIN!")
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroy(sprite)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.UntilDone)
})
let malo_uni: Sprite = null
let malos_cielo: Sprite = null
let malos_del_suelo: Sprite = null
let fantasma: Sprite = null
let bonos: Sprite = null
let piupiu: Sprite = null
let Petronila: Sprite = null
game.showLongText("Bienvenid@ a Petronila", DialogLayout.Bottom)
game.showLongText("Los controles para poder jugar son...", DialogLayout.Bottom)
game.showLongText("<- y -> para moverte de izquierda a derecha", DialogLayout.Bottom)
game.showLongText("Flecha para arriba para saltar", DialogLayout.Bottom)
game.showLongText("A y B para lanzar los proyectiles, el A para la derecha y el B para la izq", DialogLayout.Bottom)
game.showLongText("Para poder completar el juego debes conseguir llegar hasta la cima", DialogLayout.Bottom)
game.showLongText("Ready? Pulsa A para comenzar", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
tiles.setCurrentTilemap(tilemap`level1`)
Petronila = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 8 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Petronila.ay = 500
tiles.placeOnTile(Petronila, tiles.getTileLocation(2, 158))
scene.cameraFollowSprite(Petronila)
controller.moveSprite(Petronila, 200, 0)
info.setLife(3)
let fin = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.win)
tiles.placeOnRandomTile(fin, assets.tile`myTile`)
game.onUpdateInterval(2000, function () {
    bonos = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        .......88...88......
        ......8558.8558.....
        .....85445854458....
        .....85444544458....
        .....85444444458....
        ......854444458.....
        .......8544458......
        ........85458.......
        .........858........
        ..........8.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    bonos.setScale(1.3, ScaleAnchor.Middle)
    bonos.setPosition(randint(0, 16), randint(0, 160))
})
game.onUpdateInterval(500, function () {
    fantasma = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    fantasma.setScale(1.3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(fantasma, assets.tile`myTile2`)
    fantasma.setVelocity(-20, 0)
    malos_del_suelo = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Enemy)
    malos_del_suelo.setScale(1.3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(malos_del_suelo, assets.tile`myTile0`)
    tiles.placeOnRandomTile(malos_del_suelo, sprites.castle.tilePath5)
    malos_del_suelo.setVelocity(-20, 0)
    malos_cielo = sprites.create(img`
        ............................................................cc.....
        ...........................................................ccc.....
        ...........................................................cdc.....
        ..........................................................ccdc.....
        ..........................................................cddcc....
        .........................................................ccddbcc...
        .........................................................cdddbcc...
        ........................................................ccdddbdc...
        .......................................................ccdddbddc...
        ......................................................ccdddbbddbcc.
        ....................................................ccbbddbbdddbdc.
        ..................................................cccddbddddddbddc.
        .................................................ccddddbdddddbdddcc
        ................................................cdddddbbddddddddbcc
        ccc............................................cdddddbbddddddddbddc
        cdcc..........................................cddddddbbddddddbbddcc
        cddcc........................................cddddddddbbdddddddddc.
        .cddcc.......................................cdddddddddbddddddddc..
        .cdddcc......................................cdddddddddbdddddbbbccc
        ccbdddc......................................cbdddddddbbddddddddddc
        cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
        cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
        ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
        .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
        .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
        ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
        ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
        ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
        .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
        .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
        ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
        ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
        ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
        ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
        ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
        .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
        ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
        .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
        .........cbbddddddddddbbc66666666663dddddddc.......................
        .........cdddddbddddddbccd3666633ddddddddddc.......................
        .........ccddbbbddbdddbccdd33333dddddddddddc.......................
        ..........cccccddbbddbb.ccddddddddddddddddddc......................
        ..............ccccccbb...ccdddddddddddddddddc......................
        ...................cc.....ccddddddddddddddddcc.....................
        ...........................ccddddddddddbbbbddcc....................
        ............................bbbdddddddbbbbbddccccccc...............
        .............................bbbddddddbdddddddddddbcc..............
        .............................ccccddddbccccddddddddbbc..............
        ............................c3333cdddc3333cddddddcccc..............
        ...........................cc33333cbcc33333cdddddcc................
        ...........................c3333333cc3333333cdcdbbc................
        ...........................c3c3c3c3cc3c3c3c3cdccbbc................
        ...........................c3c3c3cb1c3c3c3cbbdbccc.................
        ............................bcbccc111bcbcccdbbbcc..................
        ...........................................dbccc...................
        ............................................bc.....................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        ...................................................................
        `, SpriteKind.Enemy)
    malos_cielo.setScale(1.3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(malos_cielo, assets.tile`myTile3`)
    tiles.placeOnRandomTile(malos_cielo, assets.tile`myTile1`)
    malos_cielo.setVelocity(-20, 0)
    malo_uni = sprites.create(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.Enemy)
    malo_uni.setScale(1.3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(malo_uni, sprites.dungeon.darkGroundCenter)
    malo_uni.setVelocity(-20, 0)
})
