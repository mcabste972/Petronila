controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Petronila.isHittingTile(CollisionDirection.Bottom)) {
        Petronila.vy = -180
    } else {
        Petronila.vy = 0
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
let malos: Sprite = null
let Petronila: Sprite = null
scene.setBackgroundColor(0)
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
game.onUpdateInterval(500, function () {
    malos = sprites.create(img`
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
    malos.setScale(1.3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(malos, sprites.dungeon.floorLight4)
    malos.setVelocity(20, 0)
})
