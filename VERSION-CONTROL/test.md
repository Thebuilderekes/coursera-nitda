In terms of redirection
commands like ls -l > output.txt would list the files in a list and write it to the output.txt file created 
ls -l filepath 2> filename.txt will send the error message into the filename.txt
ls -l filepath > filename.txt > 2&1 will do the same thing and is used to handle a sucessful redirection and the error at the same time.



Grep command
The grp command is used to serch text content
let us assume tt we were working with a file that contains a list of names

grep Sam names.txt would give me all the names in the file that begins with Sam
grep sam would give me all the names that begin with sam or has same in between
grep -i Sam names.txt both partial match beginning or end
grep -w Sam name.txt for only results that have only these letters, any partial match is ignored


ls /folder | grep zip  this look ino the folder for any file name with the word "zip"

