<form action="https://api.staticforms.xyz/submit" method="post">
  <!-- Replace with accesKey sent to your email -->
  <input
    type="hidden"
    name="accessKey"
    value="cd915814-7c60-433b-b917-7f5afa58f160"
  />
  <!-- Required -->
  <input type="text" name="name" placeholder="name" />
  <!-- Optional -->
  <input type="text" name="subject" placeholder="subject" />
  <!-- Optional -->
  <input type="text" name="email" placeholder="email" />
  <!-- Optional -->
  <!-- <input type="text" name="phone" /> -->
  <!-- Optional -->
  <textarea name="message" />
  <!-- Optional -->
  <!-- If you want replyTo to be set to specific email -->
  <!-- <input type="text" name="replyTo" value="myreplytoemail@example.com" /> -->
  <!-- Optional -->
  <!-- Specify @ as reply to value if you want it to be customers email -->
  <!-- <input type="hidden" name="replyTo" value="@" /> -->
  <!-- Optional -->
  <!-- If you want form to redirect to a specific url after submission -->
  <!-- <input type="hidden" name="redirectTo" value="https://example.com/contact/success"> Optional -->
  <input type="submit" value="Submit" />
</form>
