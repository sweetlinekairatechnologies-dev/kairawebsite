import os

file_path = r"c:\Users\Admin\Downloads\newpro\next.html"
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

s_start = text.find("  <!-- Success Stories Section -->")
s_end = text.find("  <!-- Blog Stack Section -->")

if s_start != -1 and s_end != -1:
    success_block = text[s_start:s_end]
    
    text = text[:s_start] + text[s_end:]
    
    script_pos = text.find("  <script>\n    gsap.registerPlugin")
    
    if script_pos != -1:
        text = text[:script_pos] + success_block + text[script_pos:]
        
        with open(file_path, "w", encoding='utf-8') as f:
            f.write(text)
        print("Moved successfully!")
    else:
        print("Script position not found.")
else:
    print("Blocks not found.")
