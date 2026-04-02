// Remote control mapper
export function mapRemote(key){
 switch(key){
  case 37:return "move_left";
  case 38:return "move_forward";
  case 39:return "move_right";
  case 40:return "move_back";
  case 13:return "jump";
  case 403:return "break";
  case 404:return "place";
 }
}
