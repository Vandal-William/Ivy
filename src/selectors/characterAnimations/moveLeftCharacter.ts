export function moveLeftCharacter(): void{

     const moveCharacter = document.querySelector('.character')  as HTMLElement | null;

    if(moveCharacter){
      moveCharacter.style.animation = "moveRight 1s 1 forwards";
    }
}