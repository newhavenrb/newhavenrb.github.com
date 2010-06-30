require 'rake/clean'
require 'yaml'
require 'erb'

CLEAN.include("*~")
CLOBBER.include("*.html")

task :build do
  puts 'Engaging warp drive...'
  start = Time.now
  yaml_file_name = 'people.yml'
  template_file_name = 'index.html.erb'
  out_file_name = 'index.html'

  people = YAML.load_file(yaml_file_name)
  puts "Read #{people.length} people from #{yaml_file_name}"

  template_raw = ''
  File.open(template_file_name, 'r') do |file|
    template_raw = file.read
  end
  puts "Read #{template_raw.length} bytes from #{template_file_name}"

  print "Rendering page..."
  template = ERB.new(template_raw, 0, "%<>")
  markup = template.result(binding)
  puts "Done."

  File.open(out_file_name, 'w') do |file|
    file << markup
  end
  puts "Wrote #{markup.length} bytes to file."

  puts "Finished in #{Time.now - start} seconds"
end

task :default => :build
