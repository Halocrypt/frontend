export function copy(e: JSX.TargetedMouseEvent<any>) {
  const { currentTarget } = e;
  const copy = currentTarget.dataset.copy;
  copyText(copy);
}

function _fallback(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (e) {}

  document.body.removeChild(textArea);
}
function copyText(text: string) {
  if (!navigator.clipboard) {
    return _fallback(text);
  }
  navigator.clipboard.writeText(text);
}
